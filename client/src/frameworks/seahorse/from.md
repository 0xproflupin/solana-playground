### How to run locally

- Install tools

Instructions on how to install [Seahorse](https://github.com/ameliatastic/seahorse-lang) can be found [here](https://seahorse-lang.org/docs/installation).

- Install dependencies

Extract the zip file in your project's directory and run:

```
yarn
```

- Build

```
seahorse build
```

- Test

```
anchor test
```

- Run client

```
anchor run client
```

> **Note**
> You might need to adjust the client and test code to fully work in local Node environment since there are playground exclusive features, e.g. if you are using `pg.wallets.myWallet`, you'll need to manually load each keypair.
