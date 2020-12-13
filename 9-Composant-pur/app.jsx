const PRODUCTS = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

function ProductRowComponant({product}) {
    const name = (
        product.stocked ?
            product.name :
            <span className={"text-danger"}>
                    {product.name}
                </span>
    );

    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
}

/* * * * *
*
* Pure component on function
*
* * * * */
const ProductRow = React.memo(ProductRowComponant);

function ProductCategoryRow({category}) {
    return (
        <tr>
            <th colSpan={"2"}>{category}</th>
        </tr>
    );
}

function ProductTable({products, filterText, inStock}) {
    const rows = [];
    let lastCategory = null;
    products.forEach(product => {
            if(inStock && !product.stocked || product.name.indexOf(filterText) === -1){
                return
            }

            if (product.category !== lastCategory) {
                lastCategory = product.category;
                rows.push(
                    <ProductCategoryRow
                        key={lastCategory}
                        category={lastCategory}/>
                );
            }
            rows.push(<ProductRow
                key={product.name}
                product={product}/>)
            ;
        }
    );

    return (
        <table className={"mt-3 table"}>
            <thead>
            <tr>
                <th> Nom </th>
                <th> Prix </th>
            </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}

/* * * * *
*
* Pure component on class
*
* * * * */
class SearchBar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleFilterInStockChange = this.handleFilterInStockChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value)
    }

    handleFilterInStockChange(e) {
        this.props.onFilterinStockChange(e.target.checked)
    }

    render() {
        const {filterText, inStock} =this.props
        return (
            <div>
                <div className={"form-group"}>
                    <input type={"text"}
                           value={filterText}
                           className={"form-control"}
                           placeholder={"Rechercher"}
                           onChange={this.handleFilterTextChange}
                    />
                </div>
                <div className={"form-check"}>
                    <input
                        type={"checkbox"}
                        checked={inStock}
                        className={"form-check-input"}
                        id={"stock"}
                        onChange={this.handleFilterInStockChange}
                    />
                    <label htmlFor={"stock"}
                           className={"form-check-label"}>
                        Produits en stock
                    </label>
                </div>
            </div>
        )
    }
}

class FilterableProductTable extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStock: false
        }
        this.handelFilterTextChange = this.handelFilterTextChange.bind(this);
        this.handelFilterinStockChange = this.handelFilterinStockChange.bind(this)
    }

    handelFilterTextChange(filterText) {
        this.setState({filterText})
    }

    handelFilterinStockChange(inStock) {
        this.setState({inStock})
    }

    render() {
        const {products} = this.props;
        return (
            <div className={"container mt-3"}>
                <SearchBar
                    filterText={this.state.filterText}
                    inStock={this.state.inStock}
                    onFilterTextChange={this.handelFilterTextChange}
                    onFilterinStockChange={this.handelFilterinStockChange}
                />
                <ProductTable
                    products={products}
                    filterText={this.state.filterText}
                    inStock={this.state.inStock}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <FilterableProductTable products={PRODUCTS}/>,
    document.querySelector("#root")
);
