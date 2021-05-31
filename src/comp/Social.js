export default function Social() {
    const Profile = () => {
        return (
            <div style={{
                height:"50px",
                width: "50px",
                marginTop: "40px",
                borderRadius: "50%",
                backgroundColor: "black"
            }}>
            </div>
        )
    }

    return(
        <div style={{ padding: "8rem 1.4rem" }}>
            <div style={{
                height:"50px",
                width: "50px",
                display: "flex",
                borderRadius: "50%",
                alignItems: "center",
                backgroundColor: "red",
                justifyContent: "center",
            }}>
                <p style={{ 
                    color: "white",
                    fontSize: "45px",
                    marginTop: "35px",
                }}>+</p>
            </div>

            <Profile></Profile>
            <Profile></Profile>
            <Profile></Profile>
            <Profile></Profile>
            <Profile></Profile>
            <Profile></Profile>
            <Profile></Profile>
        </div>
    );
}