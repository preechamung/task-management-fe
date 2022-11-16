import React from 'react'
import tw from 'tailwind-styled-components'
import { BsPlusLg } from 'react-icons/bs'

const Attachment = () => {
    return (
        <div className='flex flex-row flex-wrap gap-3'>
            <AddBtn>
                <BsPlusLg />
            </AddBtn>

            <Item>
                <img src={"/img/icons/google-docs.png"} alt="" className='w-8 h-8' />
                <div className='flex flex-col'>
                    <span className='normal__14__text'>
                        Photo
                    </span>
                    <span className='normal__text'>
                        docs.google.com
                    </span>
                </div>
            </Item>

            <Item>
                <img src={"/img/icons/figma.png"} alt="" className='w-8 h-8' />
                <div className='flex flex-col'>
                    <span className='normal__14__text'>
                        Figma (Old Design)
                    </span>
                    <span className='normal__text'>
                        figma.com
                    </span>
                </div>
            </Item>

            <Item>
                <img src={"/img/icons/pdf-file.png"} alt="" className='w-8 h-8' />
                <div className='flex flex-col'>
                    <span className='normal__14__text'>
                        StrataScratch - Stucture.pdf
                    </span>
                    <span className='normal__text'>
                        Download
                    </span>
                </div>
            </Item>

            <Item>
                <img src={"/img/icons/docs.png"} alt="" className='w-8 h-8' />
                <div className='flex flex-col'>
                    <span className='normal__14__text'>
                        Brief.docx
                    </span>
                    <span className='normal__text'>
                        Download
                    </span>
                </div>
            </Item>

            <Item>
                <img src={"/img/icons/dropbox.png"} alt="" className='w-8 h-8' />
                <div className='flex flex-col'>
                    <span className='normal__14__text'>
                        Other Photos
                    </span>
                    <span className='normal__text'>
                    dropbox.com
                    </span>
                </div>
            </Item>
        </div>
    )
}

const AddBtn = tw.div`
    flex
    w-14
    h-14
    border
    text-dimgray
    border-charlestongreen
    border-dashed
    rounded-md
    bg-charlestongreen
    justify-center
    items-center
    cursor-pointer
    duration-150
    hover:bg-transparent
`

const Item = tw.div`
    flex
    flex-row
    h-14
    w-auto
    border
    border-charlestongreen 
    rounded-md
    justify-center
    items-center
    p-2
    gap-2
    bg-charlestongreen
    cursor-pointer
    duration-150
    hover:bg-transparent
`

export default Attachment