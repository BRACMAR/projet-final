import React from 'react';


const InfoList = (props) => {
            return(
            <>
                {props.infos.map((info, index) => (
                    
                    <div className='image-container d-flex justify-content-start m-3'>
                         <span className='mr-2'>{info.Title}</span>
                        
                    </div>
                ))}
            </>
        );
    };

export default InfoList;