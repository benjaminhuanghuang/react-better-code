## Reference 
- Typechecking With PropTypes
    - https://reactjs.org/docs/typechecking-with-proptypes.html



PropTypes exports a range of validators that can be used to make sure the data you receive is valid. 
```
    Greeting.propTypes = {
        name: PropTypes.string
    };
```
In this example, we’re using PropTypes.string. When an invalid value is provided for a prop, a warning will be 
shown in the JavaScript console. 
For performance reasons, propTypes is only checked in development mode.