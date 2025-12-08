export default function Ass2(){
    
    const isPremiumUser = false;
    return (
        <>
            <h2>Assignment 2</h2>
            {isPremiumUser && <p>You get 50% Discount</p>}
            {!isPremiumUser && <p>upgread to premium for Discount</p>}
        </>
    )
}