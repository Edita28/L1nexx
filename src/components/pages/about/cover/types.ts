export interface CoverProps{
    className?: string
    CoverHeader?: CoverHeader;
    CoverInfo?: CoverInfo;
}

export interface CoverHeader{
    header: string;
    header_info: string;
}

export interface CoverInfo{
    heading: string;
    CoverInfo__text_1: string;
    CoverInfo__text_2: string;
    CoverInfo__text_3: string;
}
