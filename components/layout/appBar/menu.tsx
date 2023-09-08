'use client' // Error components must be Client Components

import Image from 'next/image'
import {Grid} from "@mui/material"
import MenuItem from "@mui/material/MenuItem"
import IconButton from "@mui/material/IconButton"
import Badge from "@mui/material/Badge"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"
import {useState} from "react"


export default function Menu() {
    const mobileMenuId = 'primary-search-account-menu-mobil'
    return (
        <Grid container>
            <Grid item md={1}>
            </Grid>
            <Grid item md={2}>
                <menu>
                    <menuitem></menuitem>
                </menu>
            </Grid>
            <Grid item md={6}>test2</Grid>
            <Grid item md={3}>test3</Grid>
        </Grid>
    )
}
