const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")

let init = 0

const botSay = (data) => {
    return [
        `hi, aku adalah si misterius. siapa nama kamu?`, //0
        `halo ${data?.nama}, aku adalah hati kamu. salam kenal ya 😉`, //1
        `${data?.nama}, berapa umur kamu?`, //2
        `ohh ${data?.usia}, kalo boleh tau rumah kamu dimana?`, //3
        `wihh ${data?.rumah}, deket ya ternyata 😅, bisa banget kali ya jalan bareng tiap hari hehe`, //4
        `${data?.nama}, hobi kamu apa yah?`, //5
        `waawww sama dongs aku juga hobi ${data?.hobi}, btw punya pacar gak?`, //6
        `ohh ${data?.nothavepacar} ya, jomblo berarti. pas kalo gitu 😋`, //7
        `${data?.nama}, emmm aduh gimana ya, kamu.... mau gak?`, //8
        `kamu.. mau gak jadi pacar aku?`, //9
        `ga cuma itu aja, kamu mau ga jadi temen hidup aku?`, //10
        `kamu ${data?.maupacaran}? aku ga mimpi kan?`, //11
        `yesssss.... akhirnyaaa. aku seneng banget aaaaaaa 😍😍`,
        `hehehehe yang tadi flashback aja, lanjut ke intinya`,
        `makasih yah sayang, kita udah sama-sama selama ini, 6 tahun`, //12
        `itu waktu yang ga lama. Aku bener-bener respect sama wanita kaya kamu`, //13
        `ga sedikit kita selalu salah paham eh akhirnya balik juga hehehe 😁`, //14
        `maafin semua kesalahan aku yah 😔`, //15
        `tas, happy anniv yang ke-6 yah, ini aku anwar yang kamu kenal, aku sayang kamu 😊`, //16
        `pokonya dengan ini kamu resmi jadi teman hidup aku, selamanya!`, //17
        `love u ❤`, //18
    ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart() {

    if (jawaban.value === "") {
        return alert("isinya jangan kosong sayang")
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

            if (jawaban.value != "engga") {
                return alert("kamu harus jawab engga")
            }

            botDelay({nothavepacar: jawaban.value}, 7)
        }
        else if (init === 8) {
            botDelay({nama: usersData[0]}, 8)
        }
        else if (init === 9) {
            botDelay(jawaban.value, 9)
        }
        else if (init === 10) {
            botDelay(jawaban.value, 10)
        }
        else if (init === 11) {
            if (jawaban.value != "mau") {
                return alert("kamu harus jawab mau")
            }
            botDelay({maupacaran: jawaban.value}, 11)
        }
        else if (init === 12) {
            botDelay(jawaban.value, 12)
        }
        else if (init === 13) {
            botDelay(jawaban.value, 13)
        }
        else if (init === 14) {
            botDelay(jawaban.value, 14)
        }
        else if (init === 15) {
            botDelay(jawaban.value, 15)
        }
        else if (init === 16) {
            botDelay(jawaban.value, 16)
        }
        else if (init === 17) {
            botDelay(jawaban.value, 17)
        }
        else if (init === 18) {
            botDelay(jawaban.value, 18)
        }
        else if (init === 19) {
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
    jawaban.value = "Iyah sama sama sayang"
}

function botEnd() {
    init = 0
    window.location.reload()
}

