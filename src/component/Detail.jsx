import React, { createContext, useState } from 'react'

export const store =createContext()

const Detail = (props) => {

    const [students,setStudents]=useState([

{

"Name":"vishnu",
"Age":"25",
"Course":"HTML",
"Batch":"August",
"id":"1"

},

{

    "Name":"durga",
    "Age":"27",
    "Course":"Css",
    "Batch":"September",
    "id":"2"
    
    },
    {

        "Name":"divya",
        "Age":"27",
        "Course":"React",
        "Batch":"December",
        "id":"3"
        
        },
        
        {
        
            "Name":"swathi",
            "Age":"23",
            "Course":"Nodejs",
            "Batch":"January",
            "id":"4"
            
            },
            {
        
                "Name":"raji",
                "Age":"24",
                "Course":"Database",
                "Batch":"April",
                "id":"5"
                
                },


    ])
  return (
    <div>



<store.Provider  value={[students,setStudents]}>


    {props.children}


</store.Provider>




        
    </div>
  )
}

export default Detail;