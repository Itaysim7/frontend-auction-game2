import React from 'react';
import './training/training.css';
import Loader from "react-loader-spinner";


function Matrix(props)
 {
     if(props.table[0] === -1)
     {
         return (
            <Loader type="TailSpin" color="#00BFFF" height={150} width={150} />
                   )
     }
     else{
        return (
            <table> 
                <thead>      
                    <tr style= {{width: `${props.size}px`,height: `${props.size}px`}}>
                        <th style= {{width: `${props.size}px`,height: `${props.size}px`}}> <h6>value/
                            <br/> type</h6></th>
                        { [...Array(props.x)].map( (ex,ix) => {
                            return <th key={ix} style= {{width: `${props.size}px`,height: `${props.size}px`}}>v{ix+1}</th>
                        })}
                    </tr>
                </thead> 
                <tbody >
                    { [...Array(props.y)].map( (ey,iy) => {
                    return (
                        <tr key={iy} style= {{width: `${props.size}px`,height: `${props.size-10}px`, fontSize:'16px'}}>
                            <td style={{backgroundColor : 'orange',width: `${props.size}px`,height: `${props.size-10}px`}}>t{iy+1}</td>
                            { [...Array(props.x)].map((ex, ix) => {
                                if(props.x_array[ix] === 1)
                                {
                                    return (<td key={ix} style= {{width: `${props.size}px`,height: `${props.size-20}px`}}>{props.table[iy][ix]}$</td>)
                                }
                                else{
                                    // return (<td key={ix} style= {{width: `${props.size}px`,height: `${props.size-20}px`, filter: 'blur(2.5px)'}}>{props.table[iy][ix]}$</td>)
                                    return (<td key={ix} style= {{width: `${props.size}px`,height: `${props.size-20}px`, textDecorationLine:'line-through', color:'red'}}>{props.table[iy][ix]}$</td>)

                                }
                            })}
                        </tr>
                    )
                    })} 
                </tbody>               
            </table>
          );

     }


}

export default Matrix;



