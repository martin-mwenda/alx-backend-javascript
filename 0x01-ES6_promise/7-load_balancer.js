export default function loadBalancer(chinaDownload, USDownload) {
  // Return a promise that resolves or rejects with the result of the first completed promise
  return Promise.race([chinaDownload, USDownload]);
}
