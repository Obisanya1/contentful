import { useState, useEffect } from "react";
import {createClient} from "contentful";

const client = createClient({
    space: 'x7far8bxu85t',
    environment: 'master',
    accessToken: '44GR5TZXOAJzRB12Kopm2kKz_ZvmjXk1jkwNWPbjkX4'
})

export const useFetchProjects = () => {
    const [loading, setLoading] = useState(true)
const [projects, setProjects] = useState([])

const getData = async() => {
    try {
        const response = await client.getEntries({content_type:'projects'});
        const projects = response.items.map((item)=> {
const {title, url, image} = item.fields
const id = item.sys.id
const img = image?.fields?.file?.url
return {title,url,id,img}
        });
        setProjects(projects);
        console.log(projects)
        setLoading(false);
    } catch (error) {
        console.log(error);
        setLoading(false);
    }
}

useEffect(()=> {
getData();
}, [] ) ;
return {loading, projects}

}


// .then((response)=> console.log(response));