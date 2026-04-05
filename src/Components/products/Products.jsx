import Card from '../UI/card/Card';

const Products = ({products}) => {
    return (
        <>
            <div className="max-mA grid sm:grid-cols-2 md:grid-cols-3 gap-5 items-center justify-center">
                {
                    products.map((product)=>{
                        return(
                        <Card product={product} 
                        key={product.id}>
                        </Card>
                        )
                    })
                }
                
            </div>
        </>
    );
};

export default Products;