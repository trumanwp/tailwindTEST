// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default function Car(props){
    return(
        <div className={`${props.bgColor} flex flex-col items-start p-6 h-full`}>
            <img className="" src={props.image} alt={props.alt}/>
            <h1 className="text-white mt-8 text-2xl ">{props.name}</h1>
            <p className="text-white mt-8 font-light">{props.info}</p>
            <button className={`${props.txtColor} bg-white rounded-4xl px-8 h-10 fixed bottom-1/4`}>Learn More</button>
        </div>
    )
}