export default function ImproveSkills(){
    const list = [
        "Yeni tarifler öğrenin",
        "Yiyecekle deney yapın",
        "Beslenme gerçeklerini bilin",
        "Know nutrition facts",
        "Yemek pişirme ipuçları alın",
        "Sıralamada yer alın"
    ]

    return(
        <div className="section improve-skills">
        <div className="col img">
            <img src="/img/gallery/img_10.jpg" alt="" />
        </div>
        <div className="col typography">
            <h1 className="title">Mutfak Becerilerinizi Geliştirin</h1>
            { list.map((item, index) => (
                <p className="skill-item" key={index}>{item}</p>
            )) }
            <button className="btn">Giriş Yap</button>
        </div>
    </div>
    )
}