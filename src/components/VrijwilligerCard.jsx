const VrijwilligerCard = (props) => {
  return (
    <div>
        <img src={props.img} />
        <div className="bg-[#cec2d1] shadow-2xl rounded-3xl font-aboreto">
            <h3 className="text-3xl">{props.name}</h3>
            <p>{props.rol}</p>
        </div>
    </div>
  )
}

export default VrijwilligerCard