let digFlag = false; //Co the no segoi xung dot su kien cho nen chung ta su dung co de thuc hien gan lai 
function handleClickSeek(e, timeline, point, setProcess, setSeek) {
    if (digFlag) return;
    const rect = timeline?.current.getBoundingClientRect()
    const clickX = e.clientX - rect.left;
    const audio = document.querySelector('.core__audio__player')
    let newTime = (clickX / rect.width) * audio.duration
    audio.currentTime = newTime
    setProcess(newTime);
    setSeek(true);
}
function handleMouseDownSeek(e, timeline, point, setProcess, setSeek, setTransition) 
{
    const timelineRef = timeline.current.getBoundingClientRect() 
    const pointRef = point.current.getBoundingClientRect() 
    let pointOfX = pointRef.left - timelineRef.left 
    const startX = e.clientX //Khi keo tha thi phai co vi tri chuot bat dau 
    function onMouseMove(e) 
    {
        let delta = e.clientX - startX 
        let offsetX = pointOfX + delta   //Vi tri tuong doi so voi timeLineref 
        const maxBounding = timelineRef.width - pointRef.width 
        if (offsetX < 0) offsetX = 0 
        if (offsetX > maxBounding) offsetX = maxBounding 
        setTransition(false) //Tat hieu ung chuyen doi 
        point.current.style.transform = `translateX(${offsetX}px)` 
        //Thuc hien cap nhat lai ban nhac 
        const clickX = point.current.getBoundingClientRect().left - timelineRef.left; 
        const audio = document.querySelector('.core__audio__player') 
        const newTime = (clickX / timelineRef.width) * audio.duration 
        setProcess(newTime) 
        setSeek(true) 
        setTransition(true) 
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        setTimeout(() => {
            digFlag = false;
        }, 0)
        document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
}

export { handleClickSeek, handleMouseDownSeek }


/*
ref.current.offsetWidth	Chiều rộng phần tử (bao gồm padding + border)
ref.current.offsetHeight	Chiều cao phần tử (bao gồm padding + border)
ref.current.clientWidth	Chiều rộng nội dung + padding, KHÔNG tính border
ref.current.clientHeight	Chiều cao nội dung + padding, KHÔNG tính border
ref.current.offsetLeft: Khoang ben trai so voi chieu
ref.current.offsetRight : kong ton tai 
ref.current.getBoundingClientRect()	Trả về tọa độ và kích thước của phần tử so với viewport
.left, .top, .right, .bottom, .width	Các giá trị từ getBoundingClientRect()
ref.current.offsetLeft	Khoảng cách trái so với phần tử cha có position
ref.current.offsetTop	Khoảng cách trên so với phần tử cha có position

////Voi boundingClinetRec() 
ref.current.getBoundingClientRect().width 
ref.current.getBoundingClientRect().height 
ref.current.getBoundingClientRect().left 
ref.current.getBoundingClientRect().right 
ref.current.getBoundingClientRect().top 
ref.current.getBoundingClientRect().bottom 
*/