import React from 'react'
import apiRiot from '../../services/apiRiot'

const agents = ({ agents }) => {
    console.log(agents)
    return (
        <img src={agents.bustPortrait}/>
    )
}

export default agents

export async function getServerSideProps(context) {
    const id = context.params.agents

    const resultado = await apiRiot.get('/agents/' + id)
    const agents = resultado.data.data

    return {
        props: { agents }, // will be passed to the page component as props
    }
}