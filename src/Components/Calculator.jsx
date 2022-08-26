import React, {useEffect, useState } from 'react'

export default function Calculator ()
{
    let [ cal, setCal ] = useState( "" );
    let [ result, setResult ] = useState( "" );
    let [ history, setHistory ] = useState( 
 [    { equation: '', output: '' }     ]);
    let updcal = value =>
    {
    setCal(cal + value);
     }
    let calculate = () =>
    {
        setCal( eval( cal ).toString() );
        setHistory( prevHistory =>
            {
                return [ ...prevHistory, history.push({ equation: (cal), output: eval(cal) }) ]
            } ); }
useEffect( () =>
{    
    console.log( history );
    },[history])
    let del = () =>
    {
         let value = cal.slice( 0, -1 );
        setCal( value );
    }
    let clear = () =>
    {
        setCal( '' );
    }
   
     return (
      
      <div className="container">
             <div className="row">
            <div className="calculator col-md-4">
        <div className="header">
                         <div className="history">
                             {history.map( (his,index) =>
                         {
                            return <div key={index}><p className='h6'>{his.equation}</p>
                                <p className='h5'>{his.output }</p></div> 
                        })} </div>
                <div className="display">
                    
                    {result ? <span className='h4'>{cal}</span> : ' '}
                    {cal || "0"}
              </div> </div>
              <div className="line"></div>
                <div className="buttongrp fw-bold">
                    <button className='btn btn-outline-primary' onClick={clear}>AC</button>
    <button className='btn btn-outline-primary' onClick={del}> <i className='fa far fa-times-rectangle fa-fw' id='cross'></i>  </button>
                    <button className='btn btn-outline-primary' onClick={() => updcal( '%' )}>%</button>
                    <button className='btn btn-outline-primary' onClick={()=>updcal('/')}> <i className='fa fa-divide'></i>/</button>
                    <button className='btn btn-outline' onClick={() => updcal( '7' )}>7</button>
                    <button className='btn btn-outline' onClick={() => updcal( '8' )}>8</button>
                    <button className='btn btn-outline' onClick={()=>updcal('9')}>9</button>
                    <button className='btn btn-outline-primary' onClick={() => updcal( '*' )}>x</button>
                    <button className='btn btn-outline'onClick={() => updcal( '4' )}>4</button>
                    <button className='btn btn-outline'onClick={() => updcal( '5' )}>5</button>
                    <button className='btn btn-outline'onClick={()=>updcal('6')}>6</button>
                    <button className='btn btn-outline-primary' onClick={() => updcal( '+' )}>+</button>
                    <button className='btn btn-outline'onClick={() => updcal( '1' )}>1</button>
                    <button className='btn btn-outline' onClick={() => updcal( '2' )}>2</button>
                    <button className='btn btn-outline'onClick={()=>updcal('3')}>3</button>
                    <button className='btn btn-outline-primary' onClick={()=>updcal('-')}>-</button>
                    <button  className='btn btn-outline'onClick={()=>updcal('0')}>0</button>
                    <button className='btn btn-outline' onClick={() => updcal( '.' )}>.</button>
                    <button className='btn btn-outline-primary' id='equal' onClick={calculate} >=</button>
                 </div></div>
                 {/* <div className="display-7">Created By Iman Aziz</div> */}
         </div>
         </div>
         
    
  )
}
