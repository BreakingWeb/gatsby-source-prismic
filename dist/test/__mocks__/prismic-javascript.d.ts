export declare const getApi: () => {
    getByID: (id: string) => {
        id: string;
        uid: string;
        type: string;
        href: string;
        tags: never[];
        first_publication_date: string;
        last_publication_date: string;
        slugs: string[];
        linked_documents: never[];
        lang: string;
        alternate_languages: never[];
        data: {
            title: {
                type: string;
                text: string;
                spans: never[];
            }[];
            meta_title: null;
            meta_description: null;
            parent: {
                link_type: string;
            };
            main: never[];
            body: ({
                slice_type: string;
                slice_label: null;
                items: {}[];
                primary: {
                    text: {
                        type: string;
                        text: string;
                        spans: never[];
                    }[];
                };
            } | {
                slice_type: string;
                slice_label: null;
                items: {
                    image: {
                        dimensions: {
                            width: number;
                            height: number;
                        };
                        alt: string;
                        copyright: null;
                        url: string;
                        Mobile: {
                            url: string;
                            dimensions: {
                                width: number;
                                height: number;
                            };
                        };
                    };
                    caption: {
                        type: string;
                        text: string;
                        spans: never[];
                    }[];
                }[];
                primary: {
                    text?: undefined;
                };
            })[];
        };
    };
    query: () => {
        page: number;
        results_per_page: number;
        results_size: number;
        total_results_size: number;
        total_pages: number;
        next_page: null;
        prev_page: null;
        results: {
            id: string;
            uid: string;
            type: string;
            href: string;
            tags: never[];
            first_publication_date: string;
            last_publication_date: string;
            slugs: string[];
            linked_documents: never[];
            lang: string;
            alternate_languages: never[];
            data: {
                title: {
                    type: string;
                    text: string;
                    spans: never[];
                }[];
                meta_title: null;
                meta_description: null;
                parent: {
                    link_type: string;
                };
                main: never[];
                body: ({
                    slice_type: string;
                    slice_label: null;
                    items: {}[];
                    primary: {
                        text: {
                            type: string;
                            text: string;
                            spans: never[];
                        }[];
                    };
                } | {
                    slice_type: string;
                    slice_label: null;
                    items: {
                        image: {
                            dimensions: {
                                width: number;
                                height: number;
                            };
                            alt: string;
                            copyright: null;
                            url: string;
                            Mobile: {
                                url: string;
                                dimensions: {
                                    width: number;
                                    height: number;
                                };
                            };
                        };
                        caption: {
                            type: string;
                            text: string;
                            spans: never[];
                        }[];
                    }[];
                    primary: {
                        text?: undefined;
                    };
                })[];
            };
        }[];
        version: string;
        license: string;
    };
};
