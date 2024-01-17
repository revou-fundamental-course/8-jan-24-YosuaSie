// alert("Hello");

function clickLuas()
{
    document.getElementById('hitungLuas').style.display = 'block';
    document.getElementById('hitungKeliling').style.display = 'none';
}

function clickKeliling()
{
    document.getElementById('hitungLuas').style.display = 'none';
    document.getElementById('hitungKeliling').style.display = 'block';
}

function hitungLuas()
{
    var sisi = document.getElementById('inputSisiLuas').value;
    if(sisi == "")
    {
        alert("Input nilai sisi persegi terlebih dahulu!!");
    }
    else
    {
        var luas = sisi*sisi;
        var html = '<p>L = S x S</p>';
        html += '<p>L = '+sisi+' x '+sisi+'</p>';
        html += '<p><b>L = '+luas+'</b></p>';
        document.getElementById('hasilLuas').innerHTML = html;
    }
}

function hitungKeliling()
{
    var sisi = document.getElementById('inputSisiKeliling').value;
    if(sisi == "")
    {
        alert("Input nilai sisi persegi terlebih dahulu!!");
    }
    else
    {
        var keliling = 4*sisi;
        var html = '<p>K = 4 x S</p>';
        html += '<p>K = 4 x '+sisi+'</p>';
        html += '<p><b>K = '+keliling+'</b></p>';
        document.getElementById('hasilKeliling').innerHTML = html;
    }
}

function resetLuas()
{
    document.getElementById('inputSisiLuas').value = "";
    document.getElementById('hasilLuas').innerHTML = "";
}

function resetKeliling()
{
    document.getElementById('inputSisiKeliling').value = "";
    document.getElementById('hasilKeliling').innerHTML = "";
}