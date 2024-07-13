import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Product> {
    return this.productsService.findOne(+id);
  }

  @Post()
  async create(
    @Body('name') name: string,
    @Body('description') description: string,
    @Body('price') price: number,
    @Body('stock') stock: number,
  ): Promise<Product> {
    const productData: Partial<Product> = {
      name,
      description,
      price,
      stock,
    };
    return this.productsService.create(productData);
  }

  // update product
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() product: Product,
  ): Promise<Product> {
    return this.productsService.update(+id, product);
  }

  // delete product
  @Delete(':id')
  async deleteProduct(@Param('id') id: number) {
    return this.productsService.delete(id);
  }
}
