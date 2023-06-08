import ArrowRight from '../assets/arrow-right.png';
import SearchIcon from '../assets/search-normal.png';
import ReactStars from 'react-stars'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';

const ShopComponent = () => {

    const ratingChanged = (newRating: number) => {
        console.log(newRating)
    }

    const [value, setValue] = useState([20, 37]);

    const handleChange = (_event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <div className='flex'>
            <div className="w-3/4 px-12 mt-5">
                <div className="flex flex-row justify-between px-3 py-2">
                    <div className="show-results text-gray text-lg">Showing 1-9 of 57 results</div>
                    <div className="shop-popularity text-gray flex space-x-3">
                        <div className='text-lg'>Sort by popularity</div>
                        <img src={ArrowRight} alt="" />
                    </div>
                </div>

                <div className="flex flex-wrap text-center items-center mt-5">
                    {[...Array(9)].map((_, index) => (
                        <div className="w-1/3 p-5" key={index}>
                            <div className="aspect-square">
                                <img
                                    src="https://images.pexels.com/photos/1432516/pexels-photo-1432516.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                                    alt=""
                                    className="object-cover h-full"
                                />
                            </div>
                            <div className="product-name">Random Image</div>
                            <div className='flex justify-center'>
                                <ReactStars
                                    count={5}
                                    onChange={ratingChanged}
                                    size={24}
                                    color2={'#ffd700'}
                                />
                            </div>
                            <div className="shop-price">
                                $73,00
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-1/4 mr-12 mt-5">
                <div className="border border-gray px-5 py-4 flex justify-between">
                    <input
                        type="text"
                        className="outline-none flex-grow px-2"
                        placeholder="Search..."
                    />
                    <img src={SearchIcon} alt="" />
                </div>
                <div className="mt-10 space-y-8 mb-8">
                    <div className="font-bold text-2xl">
                        Category
                    </div>
                    <div className="text-lg space-y-6 text-gray">
                        <div className="category-item">
                            Ceiling (25)
                        </div>
                        <div className="category-item">
                            Ceiling (25)
                        </div>
                        <div className="category-item">
                            Ceiling (25)
                        </div>
                        <div className="category-item">
                            Ceiling (25)
                        </div>
                        <div className="category-item">
                            Ceiling (25)
                        </div>
                    </div>
                    <div className="font-bold text-2xl">
                        Color
                    </div>
                    <div className="text-lg space-y-6 text-gray">
                        <div className="color-item">
                            Black (25)
                        </div>
                        <div className="color-item">
                            Black (25)
                        </div>
                        <div className="color-item">
                            Black (25)
                        </div>
                        <div className="color-item">
                            Black (25)
                        </div>
                        <div className="color-item">
                            Black (25)
                        </div>
                    </div>
                </div>
                <Box sx={{ width: 300 }}>
                    <Slider
                        getAriaLabel={() => 'Price'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        min={10}
                        max={100}
                        color='secondary'
                        sx={{ color: 'black' }}
                    />
                </Box>
                <div className="flex justify-between items-center">
                    <div className="text-lg">
                        Price ${value[0]} - ${value[1]}
                    </div>
                    <div className="bg-black px-6 py-2 hover:bg-gray text-white">
                        Filter
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopComponent;
