import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {useEffect, useState} from "react";
import {link} from "fs";
import * as url from "url";
import {any} from "prop-types";

const inter = Inter({ subsets: ['latin'] })



interface Starwars {
    name:string;
    model:string;
    manufacturer:string;
    cost_in_credits:number;


}
export default function Home() {
    const [starwars, setStarwars] = useState<Starwars |null>(null);

    useEffect(() => {
        fetch("https://swapi.dev/api/starships/9/")
            .then((res) => res.json())
            .then((data) => setStarwars(data))
    },[])
    console.log(starwars)

    return (
<div>
    <p>{starwars?.name}</p>
    <p>{starwars?.model}</p>
    <p>{starwars?.manufacturer}</p>
    <p>{starwars?.cost_in_credits}</p>
</div>
    )
}
