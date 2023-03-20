# javascript-await-promess

```

await new Promise((r) => setTimeout(r, 5000));

```


espera
await
sleep
aguarda

# função function sleep 

``` 
async function sleep(milisegundos=1000){
    if(milisegundos < 100){
        milisegundos = milisegundos * 1000
    }
    await new Promise((r) => setTimeout(r, milisegundos));
}

```
