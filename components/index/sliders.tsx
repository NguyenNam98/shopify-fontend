'use client'
import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import {Card, CardActions, CardContent, Typography} from "@mui/material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        imgPath: '/slider/slider1.webp',
        information: {
            time: 'Mega Sale, Don’t Miss Out !iloveugly Fashion',
            title: 'iloveugly Fashion \nClothings',
            discount: 40
        }
    },
    {
        imgPath: '/slider/slider2.webp',
        information: {
            time: 'Mega Sale, Don’t Miss Out !iloveugly Fashion',
            title: 'iloveugly Fashion \nClothings',
            discount: 40
        }
    },
    {
        imgPath:'/slider/slider3.webp',
        information: {
            time: 'Mega Sale, Don’t Miss Out !iloveugly Fashion',
            title: 'iloveugly Fashion \nClothings',
            discount: 40
        }
    },

];
const BootstrapButton = styled(Button)(({theme}) => ({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    lineHeight: 1.5,
    backgroundColor: theme.palette.primary.light,
    width: 100,
    color: theme.typography.subtitle1.color
}))
function SwipeableTextMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <Box key={index}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <div style = {{
                                backgroundImage: `url(${step.imgPath})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'left 35% bottom 45%;',
                                backgroundColor: '#f1f1f1',
                                height: 350,
                            }}>
                                <Box style = {{
                                    paddingLeft: 300,
                                    paddingTop: 60
                                }}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 14 }} color="#111111" gutterBottom>
                                            {step.information.time}
                                        </Typography>
                                        <Typography variant="h5" component="div" color="#111111" >
                                            {step.information.title}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            Discount
                                        </Typography>
                                        <Typography variant="h5" color = "#669900">
                                            {step.information.discount}%
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <BootstrapButton>Shop Now</BootstrapButton>
                                    </CardActions>
                                </Box>
                            </div>
                        ) : null}
                    </Box>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </Box>
    );
}

export default SwipeableTextMobileStepper;