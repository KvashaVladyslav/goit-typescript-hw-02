
import { useEffect, useState } from "react";
import { getArticles } from "../../api-data";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import css from "./App.module.css"
import { ImageInterface, TargetPhotoInterface } from "../../types";



export default function App() {

    const [articles, setArticles] = useState<ImageInterface[]>([]);
    const [loader, setLoader] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [page, setPage] = useState<number>(1)
    const [searchQuery, setSearchQuery] = useState<string>("")
    const [modalWindow, setModalWindow] = useState<boolean>(false)
    const [targetPhoto, setTargetPhoto] = useState<TargetPhotoInterface>({ alt: "", url: "" })

    useEffect(() => {
        if (searchQuery.trim() === "") {
            return
        } 

        async function fetchArticles() {
        try {
            setLoader(true)
            setError(false)
            const fetchedArticles = await getArticles(searchQuery, page)
            setArticles((articles) => [...articles, ...fetchedArticles])
        } catch {
                setArticles([])
                setError(true)
        } finally {
                setLoader(false)
        }
            }
        fetchArticles()

    }, [searchQuery, page])

    const handleSearch = async (query: string) => {
        setSearchQuery(query)
        setPage(1)
        setArticles([])
    }

    const handleLoadMore = async () => {
        setPage(page + 1)
        
    }

    const handleOpenModal = (alt: string, url: string) => {
        setTargetPhoto({alt, url})
        setModalWindow(true)
    }

    const handleCloseModal = () => {
        setModalWindow(false)
        setTargetPhoto({alt: "", url: ""})
    }

    return (
        <div className={css.container}>
            <SearchBar onSubmit={handleSearch} />
            {error && <ErrorMessage />}
            {articles.length > 0 && <ImageGallery items={articles} openModal={handleOpenModal} />}
            {loader && <Loader />}
            {articles.length > 0 &&  !loader && <LoadMoreBtn loadMore={handleLoadMore} />}
            <ImageModal isModalOpen={modalWindow} closeModal={handleCloseModal} targetPhoto={targetPhoto} />
        </div>
    )
}