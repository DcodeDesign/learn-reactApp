export class Feild extends React.Component {
    render() {
        const {name, value, onChange, children} = this.props;
        return (
            <div className={"form-group"}>
                <label htmlFor={"name"}> {children} </label>
                <input type={"text"} value={value} onChange={onChange} id={name} name={name}
                       className={"form-control"}/>
            </div>
        );
    }
}
