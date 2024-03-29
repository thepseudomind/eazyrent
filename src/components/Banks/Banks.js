import React from 'react';
import './Banks.css';
import bin from '../../img/bin.png';

const Banks = ({banks, action, edit, reset, deleteBank})=>{
    if(banks.length === 0){
        return <span></span>;
    }else{
        return (
            <div className="banks">
                {
                    banks.map((bank, i) => {
                        return (
                            <div className={(banks[i].status === 'under review') ? "bank inactive" : "bank active"} key={banks[i].id} id={banks[i].id} onClick={(e)=> {
                                if(e.target.id !== ''){
                                    reset();
                                    action('edit');
                                    edit(e.target.id);
                                }
                            }}>
                                <span className="bank__delete" onClick={
                                    (e)=>{
                                        if(e.target.className === "bank__delete"){
                                            reset();
                                            deleteBank(e.target.parentNode.id);
                                        }else if(e.target.className ==="bank__delete--img"){
                                            reset();
                                            deleteBank(e.target.parentNode.parentNode.id);
                                        }
                                    }
                                }>
                                    <img src={bin} alt="delete bank" className="bank__delete--img"/>
                                </span>
                                <div className="bank__content">
                                    <p className="bank__content--name">{banks[i].name}</p>
                                    <p className="bank__content--account">{banks[i].account}</p>
                                    <span className="bank__content--status"><span className="bank__content--indicator"></span>{banks[i].status}</span>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default Banks;

    // const bankID = a.length === 0 ? 0 : (a[a.length - 1].id) + 1;
                    // if(banks[i].status === 'under review'){
                    //     return (
                    //         <div className="bank inactive" key={i} id={i} onClick={()=> action('edit')}>
                    //             <div className="bank__content">
                    //                 <p className="bank__content--name">{banks[i].name}</p>
                    //                 <p className="bank__content--account">{banks[i].account}</p>
                    //                 <span className="bank__content--status"><span className="bank__content--indicator"></span>{banks[i].status}</span>
                    //             </div>
                    //         </div>
                    //     )
                    // }else{
                    //     return (
                    //         <div className="bank active" key={i} id={i} onClick={()=> action('edit')}>
                    //             <div className="bank__content">
                    //                 <p className="bank__content--name">{banks[i].name}</p>
                    //                 <p className="bank__content--account">{banks[i].account}</p>
                    //                 <span className="bank__content--status"><span className="bank__content--indicator"></span>{banks[i].status}</span>
                    //             </div>
                    //         </div>
                    //     )
                    // }