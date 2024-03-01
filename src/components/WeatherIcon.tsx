/** @format */

import { cn } from '@/utils/cn'
import Image from 'next/image'
import React from 'react'

type Props = {
    iconname: string;
}

export default function WeatherIcon(
    props: React.HTMLProps<HTMLDivElement> & { iconname: string }
) {
    return (
        <div title={props.iconname} {...props} className={cn("relative h-20 w-20")}>
            <Image
                priority={true} // {false} | {true}
                width={100}
                height={100}
                alt="weather-icon"
                className='absolute h-full w-full'
                src={`https://openweathermap.org/img/wn/${props.iconname}@4x.png`} />
        </div>
    )
}