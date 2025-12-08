export default function App(){
    let isDarkMode = false;
    let isActive = true;

    // if(isActive){
    //     return <p>You are Active</p>
    // }
    // else {
    //     return <p>You are not active</p>
    // }

    return(
        <>
            <div>
                <p>Main part of One
                {
                    isActive? "Abc" : "Xyz"
                }
                </p>
            </div>
        </>
    )
}