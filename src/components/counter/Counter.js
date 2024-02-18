
const Counter = (props) => {
    const {count, duration}=props;

    return (
        <div>
            {count} {duration}
        </div>
    )
}

export default Counter