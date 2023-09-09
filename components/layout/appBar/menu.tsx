'use client' // Error components must be Client Components

import {Grid} from "@mui/material"
import List from "@/components/layout/appBar/menu/list"
import {styled} from "@mui/material/styles"
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import Box from "@mui/material/Box";

const listItem = {
    department : [
        'Consumer Electrics',
        'Clothing & Apparel',
        'Garden & Kitchen',
        'Health & Beauty',
        'Jewelry & Watches',
        'Computers & Technologies',
        'Babies & Moms',
        'Sport & Outdoor',
        'Phones & Accessories',
        'Books & Office',
        'Cars & Motocycles',
        'Home Improvement',
        'Air Conditioners'
    ] ,
    home : [
        'Consumer Electrics',
        'Clothing & Apparel',
        'Garden & Kitchen',
        'Health & Beauty',
        'Jewelry & Watches',
        'Computers & Technologies',
        'Babies & Moms',
        'Sport & Outdoor',
        'Phones & Accessories',
        'Books & Office',
        'Cars & Motocycles',
        'Home Improvement',
        'Air Conditioners'
    ],
    pages : [
        'Consumer Electrics',
        'Clothing & Apparel',
        'Garden & Kitchen',
        'Health & Beauty',
        'Jewelry & Watches',
        'Computers & Technologies',
        'Babies & Moms',
        'Sport & Outdoor',
        'Phones & Accessories',
        'Books & Office',
        'Cars & Motocycles',
        'Home Improvement',
        'Air Conditioners'
    ] ,
    shop : [
        'Consumer Electrics',
        'Clothing & Apparel',
        'Garden & Kitchen',
        'Health & Beauty',
        'Jewelry & Watches',
        'Computers & Technologies',
        'Babies & Moms',
        'Sport & Outdoor',
        'Phones & Accessories',
        'Books & Office',
        'Cars & Motocycles',
        'Home Improvement',
        'Air Conditioners'
    ],
    blog : [
    ] ,
    contact : [

    ],

}
export default function Menu() {

    const GridContainer = styled(Grid)(({theme}) => ({
        backgroundColor: theme.palette.primary.light,
        borderTop : '1px solid #9999',
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    }))
    return (
        <GridContainer container sx={{backgroundColor: '#ffff'}} md = {12} xs={0} sm ={0}>
            <Grid item md = {1}>
            </Grid>
            <Grid item md = {2}>
                <List
                    listItem = {listItem.department}
                    name = 'Shop By Department'
                />
            </Grid>
            <Grid item md={6}>
                <Grid container>
                    <Grid item md={2}>
                        <List
                            listItem = {listItem.home}
                            name = 'Home'
                        />
                    </Grid>
                    <Grid item md={2}>
                        <List
                            listItem = {listItem.pages}
                            name = 'pages'
                        />
                    </Grid>
                    <Grid item md={2}>
                        <List
                            listItem = {listItem.shop}
                            name = 'Shop'
                        />
                    </Grid>
                    <Grid item md={2}>
                        <List
                            listItem = {listItem.blog}
                            name = 'Blogs'
                        />
                    </Grid>
                    <Grid item md={2}>
                        <List
                            listItem = {listItem.contact}
                            name = 'Contacts'
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={3} alignItems={"center"}>
                <Box style={{color: '#111', display: "flex", marginTop: 8}} >
                    <LocalPhoneOutlinedIcon/>
                    <div style={{marginLeft: 6}}>Hotline: 1-800-234-5678</div>
                </Box>
            </Grid>
        </GridContainer>
    )
}
