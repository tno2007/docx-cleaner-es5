import { CARRIAGE_RETURN, LINE_FEED, SPACE } from './constants';

const END_OF_ID_SEQUENCE_CHARACTERS = ['\\', '{', CARRIAGE_RETURN, LINE_FEED, SPACE];

const getRtfImageSpid = (imageData: string, spidPrefix: string): string | null => {
    const indexes = END_OF_ID_SEQUENCE_CHARACTERS.map((character) => imageData.indexOf(character));
    const foundIndexes = indexes.filter((index) => index !== -1);
    const idLength = Math.min(imageData.length, ...foundIndexes);
    const id = imageData.substring(0, idLength);
    return id ? `${spidPrefix}${id}` : null;
};

export default getRtfImageSpid;
