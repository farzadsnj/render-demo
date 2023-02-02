
export const ChildC =() =>{
    const count = useContext(CountContext)
    console.log('child C render')
    return(
        <>
            <div>child C count = {count}</div>
        </>
    )
}