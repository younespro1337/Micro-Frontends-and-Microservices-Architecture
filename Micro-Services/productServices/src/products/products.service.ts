import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  private readonly logger = new Logger(ProductsService.name);
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  //Get All Products
  async findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  //Find A specific Product
  async findOne(id: number): Promise<Product> {
    return this.productsRepository.findOne({ where: { id } });
  }

  // Create a New Product
  async create(productData: Partial<Product>): Promise<Product> {
    // this.logger.log(`Creating product with data: ${JSON.stringify(productData)}`);
  
    // Check if name and other required fields are provided
    if (!productData.name || !productData.description || !productData.price || !productData.stock) {
      throw new BadRequestException('Name, description, price, and stock are required');
    }
  
    const newProduct = this.productsRepository.create(productData);
    return this.productsRepository.save(newProduct);
  }
  

  // update Product
  async update(id: number, product: Product): Promise<Product> {
    await this.productsRepository.update(id, product);
    return await this.productsRepository.findOne({ where: { id } });
  }

  // Delete Product
async delete(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
