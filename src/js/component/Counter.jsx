import React from 'react'

const Counter = (props) => {
    
  return (
    <div className="container-fluid d-flex bg-dark justify-content-center fs-1 ">
            <div className="bg-dark bg-gradient text-white m-2 px-2 counter border border-secondary rounded "><i className="far fa-clock"></i></div>
            <div className="bg-dark bg-gradient text-white m-2 px-2 counter border border-secondary rounded">{props.digiSix % 10}</div>
            <div className="bg-dark bg-gradient text-white m-2 px-2 counter border border-secondary rounded">{props.digiFive % 10}</div>
            <div className="bg-dark bg-gradient text-white m-2 px-2 counter border border-secondary rounded">{props.digiFour% 10}</div>
            <div className="bg-dark bg-gradient text-white m-2 px-2 counter border border-secondary rounded">{props.digiThree % 10}</div>
            <div className="bg-dark bg-gradient text-white m-2 px-2 counter border border-secondary rounded">{props.digiTwo % 10}</div>
            <div className="bg-dark bg-gradient text-white m-2 px-2 counter border border-secondary rounded">{props.digiOne % 10}</div>
        </div>
  )
}

export default Counter