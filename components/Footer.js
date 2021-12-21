const Footer =(props)=>{
    return(
        <footer className="flex w-full h-24 bg-emerald-500 ">

            <h2 className="text-xl"> {props.report.length} Locations World Wide </h2>
            <h1 className="text-xl">&copy; 2021</h1>

      </footer>
    )
}
export default Footer