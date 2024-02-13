<?php

namespace Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * Avoir
 *
 * @ORM\Table(name="avoir", indexes={@ORM\Index(name="panier_id", columns={"panier_id"})})
 * @ORM\Entity
 * @apiResource()
 */
class Avoir
{
    /**
     * @var int
     *
     * @ORM\Column(name="box_id", type="bigint", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="NONE")
     */
    private $boxId;

    /**
     * @var int
     *
     * @ORM\Column(name="panier_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="NONE")
     */
    private $panierId;
}
