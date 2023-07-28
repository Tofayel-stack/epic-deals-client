

const MyOrder = () => {
    const orderIteam = localStorage.getItem('products')
    const pr = JSON.parse(orderIteam)
    console.log(pr);

    return (
        <div>
            my order 
        </div>
    );
};

export default MyOrder;