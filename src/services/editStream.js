import streams from './streams';

export const editStream = async (id, formValue) => {
    await streams.patch(`/streams/${id}`, formValue);
};