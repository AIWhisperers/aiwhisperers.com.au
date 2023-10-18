const Jumbotron = ({heading, lead, note}) => {
  return (
    <div className="jumbotron px-2 px-md-4 pb-2 pt-4">
      <h1 className="font-system display-4">{heading}</h1>
      <p className="helvetica-body lead">{lead}</p>
      <hr className="mb-3 mt-4 border-white" />
      <p className="helvetica-body">{note}</p>
    </div>
  )
}


export default Jumbotron
