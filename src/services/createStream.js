import streams from './streams';

export const createStream = async (formValue) => {
    await streams.post('/streams', formValue);
};