const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")

let init = 0

const botSay = (data) => {
    return [
        `hi, aku adalah si misterius. siapa nama kamu?`, //0
        `halo ${data?.nama}, salam kenal ya 😉`, //1
        `${data?.nama}, berapa umur kamu?`, //2
        `ohh ${data?.usia}, kalo boleh tau rumah kamu dimana?`, //3
        `wihh ${data?.rumah}, deket ya ternyata. bisa kali ya jalan bareng tiap hari hehe 😅`, //4
        `${data?.nama}, hobi kamu apa?`, //5
        `waawww sama dongs aku juga hobi ${data?.hobi}, btw punya pacar gak?`, //6
        `ohh ${data?.nothavepacar} ya, jomblo berarti. pas kalo gitu 😋`, //7
        `${data?.nama}, emmm aduh gimana ya, kamu.... mau gak jadi pacar aku?`, //8
        `sekarang kamu jadi pacar aku yesssss.... akhirnyaaa. aku seneng banget aaaaaaa 😍😍`//9
    ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart() {

    if (jawaban.value === "") {
        return alert("isinya jangan kosong yah")
    }
    else {
        init++
        if (init === 1) {
            botDelay({nama: jawaban.value}, 1)
        }
        else if (init === 2) {
            botDelay({nama: usersData[0]}, 2)
        }
        else if (init === 3) {
            botDelay({usia: jawaban.value}, 3)
        }
        else if (init === 4) {
            botDelay({rumah: jawaban.value}, 4)   
        }
        else if (init === 5) {
            botDelay({nama: usersData[0]}, 5)
        }
        else if (init == 6) {
            botDelay({hobi: jawaban.value}, 6)
        }
        else if (init === 7) {

            if (jawaban.value != "engga" && jawaban.value != "Engga") {
                init = 6
                return alert("kamu harus jawab engga")
            }
            else {
                botDelay({nothavepacar: jawaban.value}, 7)
            }
        }
        else if (init === 8) {
            botDelay({nama: usersData[0]}, 8)
        }
        else if (init === 9) {
            if (jawaban.value != "mau" && jawaban.value != "Mau") {
                init = 8
                return alert("kamu harus jawab mau")
            } else {
                botDelay({maupacaran: jawaban.value}, 9)
            }
        }
        else if (init === 10) {
            botFinish()
        }
        else {
            botEnd()
        }
    }
}

function botDelay(jawabanuser, arrayJawab) {
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanuser)[arrayJawab]
    }, [500])

    usersData.push(jawaban.value)

    jawaban.value = ""
}

function botFinish() {
    pertanyaan.innerHTML = `Thank u ya ${usersData[0]} udah main ke sini 😊`
    jawaban.value = "iyah sama sama"
}

function botEnd() {
    init = 0
    window.location.reload()
}

