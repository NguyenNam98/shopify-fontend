'use client'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import {Button, MenuList, Paper, Popover} from "@mui/material"
import PopupState, {bindPopover, bindTrigger} from "material-ui-popup-state";
import MenuItem from "@mui/material/MenuItem"
interface ListMenu {
    listItem: string[]
    name: string
}


export default function List(props: ListMenu ) {
    const {
        listItem,
        name
    } = props

    return (
        <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
                <div>
                    <Button
                        // id="demo-customized-button"
                        aria-haspopup="true"
                        variant="contained"
                        disableElevation
                        {...bindTrigger(popupState)}
                        endIcon={listItem.length ? <KeyboardArrowDownIcon /> : ''}
                    >
                        {name}
                    </Button>
                    <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <Paper>
                            <MenuList>
                                {listItem.map((item, index) => {
                                    return (
                                        <MenuItem>{item}</MenuItem>
                                    )
                                })}

                            </MenuList>
                        </Paper>
                    </Popover>
                </div>
            )}
        </PopupState>
    )
}
