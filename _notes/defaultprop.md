## Reference 
- Typechecking With PropTypes
    - https://reactjs.org/docs/typechecking-with-proptypes.html



You can define default values for your props by assigning to the special defaultProps property:
```
    // Specifies the default values for props:
    Greeting.defaultProps = {
        name: 'Stranger'
    };
```
If you are using a Babel transform like transform-class-properties , you can also declare defaultProps as static property within a React component class
```
    class Greeting extends React.Component {
        static defaultProps = {
            name: 'stranger'
        }

        render() {
            return (
                <div>Hello, {this.props.name}</div>
            )
        }
    }
```
The defaultProps will be used to ensure that this.props.name will have a value if it was not specified by the parent component. 

The propTypes typechecking happens after defaultProps are resolved, so typechecking will also apply to the defaultProps.