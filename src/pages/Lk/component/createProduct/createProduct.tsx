import { Button, TextareaAutosize } from '@mui/material'
import React, { useState } from 'react'
import { ModalCustom } from '../../../../component/Modal/Modal'
//@ts-ignore
import styles from './styles.module.css'
import ImageUploading from 'react-images-uploading';
import { Inputs } from '../../../../component/Input/input';
import { useAppDispatch } from '../../../../redux/store';
import { addProduct } from '../../redux/LkSlice';
import { addProductHome } from '../../../Home/redux/HomeSlice';
export const CreateProduct: React.FC = () => {
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [valueTitle, setValueTitle] = useState<string>('')
    const [valueText, setValueText] = useState<string>('')
    const handleOpen = () => setOpenModal(true)
    const handleClose = () => setOpenModal(false)
    const [images, setImages] = React.useState<any>([]);
    const maxNumber = 1;
    const dispatch = useAppDispatch()
    const onChange = (imageList: any, addUpdateIndex: any) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };
    const handleChangeTitle = (e: string) => {
        setValueTitle(e)
    }
    const handleChangeText = (e: string) => {
        setValueText(e)
    }
    const handleAddProduct = () => {
        const value = {
            name: valueTitle,
            info: valueText,
            image: images[0]?.data_url
        }
        dispatch(addProduct(value))
        dispatch(addProductHome(value))
        handleClose()
    }
    return(
        <ModalCustom 
            handleClose={handleClose} 
            handleOpen={handleOpen}
            open={openModal}
            buttonOpen={
                <>
                    <Button 
                        variant='contained' 
                        color='success' 
                        className={styles.add__product}
                        onClick={handleOpen}
                    >
                        Добавить товар
                    </Button>
                </>
            }
        >
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
                }) => (
                // write your building UI
                <div className="upload__image-wrapper">
                    <Button 
                    color="success"
                    variant='contained' 
                    style={isDragging ? { color: 'red' } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                    >
                    Добавить изображение
                    </Button>
                    &nbsp;
                    {imageList.map((image, index) => (
                    <div key={index} className="image-item">
                        <img src={image['data_url']} alt="" width="300" />
                        <div className="image-item__btn-wrapper">
                        <Button variant='contained' onClick={() => onImageUpdate(index)}>Изменить</Button>
                        <Button variant='contained' color="error" onClick={() => onImageRemove(index)}>Remove</Button>
                        </div>
                    </div>
                    ))}
                </div>
                )}
            </ImageUploading>
            <div>Введите заголовок</div>
            <Inputs type="text" value={valueTitle} handleChange={handleChangeTitle}/>
            <div>Введите текст</div>        
            <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Minimum 3 rows"
                style={{ width: 200, height:100 }}
                value={valueText}
                onChange={(e) => handleChangeText(e.target.value)}
            />
            <div>
            <Button variant='contained' onClick={handleAddProduct}>
                Добавить товар
            </Button>
            </div>
        </ModalCustom>
    )
}