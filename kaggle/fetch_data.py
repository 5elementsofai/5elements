import kaggle
import os
import zipfile

kaggle.api.authenticate()

raw_datasets = kaggle.api.dataset_list()


for raw_dataset in raw_datasets:
    dataset = dict(raw_dataset.__dict__)
    raw_files = kaggle.api.dataset_list_files(dataset['ref'])

    kaggle.api.dataset_download_files(dataset['ref'], './data', False, False)
    
    dataset_urls = dataset['ref'].split('/')
    dataset_slug = dataset_urls[1]
    outfile = os.path.join('./data', dataset_slug + '.zip')
    with zipfile.ZipFile(outfile) as z:
        z.extractall('./data/' + dataset_slug)

    '''
    for raw_file in raw_files.files:
        file = dict(raw_file.__dict__)
        metadata = kaggle.api.dataset_metadata(dataset['ref'], file['ref'])
    '''
        


"""
competitions = kaggle.api.competitions_list()

for competition in competitions:
    pass

"""