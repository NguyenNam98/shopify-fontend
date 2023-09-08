'use client'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import {Button, Grid} from "@mui/material"

interface ListMenu {
    isOpen: boolean
    listItem: {}
    handleOpen: Function
}
export default function List(props: ListMenu ) {
    const { isOpen, listItem, handleOpen} = props
    return (
        <>
            <Button
                id="demo-customized-button"
                aria-controls={isOpen ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={isOpen ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleOpen()}
                endIcon={<KeyboardArrowDownIcon />}
            >
                Options
            </Button>
        </>
    )
}
