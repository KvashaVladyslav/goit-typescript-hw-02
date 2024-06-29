export interface ImageInterface {
    id: string;
    urls: {
        small: string;
        regular: string;
    }
    alt_description: string;
    likes: number;
    user: {
        name: string;
    }
}

export interface ImagesResponse {
    results: ImageInterface[];
    total: number;
    total_pages: number;
}

export interface SearchBarInterface {
    onSubmit: (query: string) => void;
}

export interface LoadMoreInterface {
    loadMore: () => void;
}

export interface TargetPhotoInterface {
    alt: string;
    url: string;
}

export interface ModalImagesInterface {
    isModalOpen: boolean;
    closeModal: () => void;
    targetPhoto: TargetPhotoInterface;
}

export interface ImageGalleryInterface {
    items: ImageInterface[];
    openModal: (alt: string, url: string) => void
}

export interface ImageCardInterface {
    item: ImageInterface;
    openModal: (alt: string, url: string) => void
}