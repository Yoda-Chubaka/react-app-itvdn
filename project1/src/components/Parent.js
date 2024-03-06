function Parent(props) {

    console.log(props.forX);

    return (
        <>
            <p>My name is {props.data.name}</p>
        </>
    )
}

export default Parent;