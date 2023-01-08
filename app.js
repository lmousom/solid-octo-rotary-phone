async function captureFingerprintScan() {
  // Create a PublicKeyCredential object
  const publicKey = {
    challenge: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
    rp: {
      name: 'Example RP',
      id: 'mousom.in',
    },
    user: {
      id: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
      name: 'latifulmousom@gmail.com',
      displayName: 'Latiful Mousom',
    },
    pubKeyCredParams: [
      {
        type: 'public-key',
        alg: -7,
      },
    ],
    timeout: 60000,
    attestation: 'none',
  };

  // Request the user's fingerprint scan using the PublicKeyCredential object
  const response = await navigator.credentials.get({ publicKey });
  const rawId = response.rawId;

  // Return the fingerprint scan data as a binary buffer
  return rawId;
}
captureFingerprintScan().then(data => {
  console.log(data)
  alert(data);
}).catch(err => {
  console.log(err)
})
